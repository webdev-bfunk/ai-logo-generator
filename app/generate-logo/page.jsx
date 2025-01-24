"use client"
import React, { useContext, useEffect, useState } from 'react'
import { UserDetailContext } from '../_context/UserDetailContext'
import Prompt from '../_data/Prompt';
import axios from 'axios';
import Image from 'next/image';

function GenerateLogo() {
    const { userDetail } = useContext(UserDetailContext);
    const [formData, setFormData] = useState();
    const [loading, setLoading] = useState(false);
    const [logoImage, setLogoImage] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined" && userDetail?.email) {
            const storage = localStorage.getItem("formData");

            if (storage) {
                setFormData(JSON.parse(storage));
                console.log(JSON.parse(storage));
            }
        }
    }, [userDetail]);

    useEffect(() => {
        if (formData?.title) {
            GenerateAILogo();
        }
    }, [formData]);

    const GenerateAILogo = async () => {
        setLoading(true);
        const PROMPT = Prompt.LOGO_PROMPT.replace("{logoTitle}", formData.title)
            .replace("{logoDesc}", formData.desc)
            .replace("{logoColorPalette}", formData.palette)
            .replace("{logoIdea}", formData.idea)
            .replace("{logoDesign}", formData.design.title)
            .replace("{logoPrompt}", formData.design.prompt);

        try {
            const result = await axios.post("/api/ai-logo-model", {
                prompt: PROMPT,
                email: userDetail?.email,
                title: formData?.title || "",
                desc: formData?.desc || "",
            });

            console.log("AI result:", result.data);
            if (result.data?.image) {
                setLogoImage(result.data.image);
            } else {
                console.warn("No image returned from the API.");
                setLogoImage(null);
            }
        } catch (error) {
            console.error("Error generating AI logo:", error);
            setLogoImage(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>{loading && "Loading..."}</h2>
            {!loading && logoImage && (
                <Image src={logoImage} alt="logo" width={200} height={200} />
            )}
            {!loading && !logoImage && <p>No logo generated yet.</p>}
        </div>
    );
}

export default GenerateLogo;
