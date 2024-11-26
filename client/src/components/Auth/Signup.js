/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import AuthLayout from "./AuthLayout";
import axios from "axios";
import { Copy, Check, Shield, AlertTriangle, XCircle } from "lucide-react";
import Button from "../../Common/Button";
import { backendUrl } from "../../constant";
import { useNavigate } from "react-router-dom";

const elliptic = require("elliptic");

const ec = new elliptic.ec("p256");

const Signup = () => {
    const navigate = useNavigate();
    const [privateKey, setPrivateKey] = useState(null);
    const [publicKey, setPublicKey] = useState(null);
    const [isKeyGenerated, setIsKeyGenerated] = useState(false);
    const [showKeyPopup, setShowKeyPopup] = useState(false);
    const [isTermsAccepted, setIsTermsAccepted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
    });
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
    });
    const [globalError, setGlobalError] = useState(null);
    const [copiedKey, setCopiedKey] = useState({
        private: false,
        public: false,
    });

    const validateForm = () => {
        const newErrors = { firstName: "", lastName: "" };
        let isValid = true;

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
            isValid = false;
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const genKeyPair = () => {
        try {
            const keyPair = ec.genKeyPair();

            const privateKeyHex = keyPair.getPrivate("hex");
            const publicKeyPoint = keyPair.getPublic();
            const publicKeyHex = {
                x: publicKeyPoint.getX().toString(16),
                y: publicKeyPoint.getY().toString(16),
            };

            setPrivateKey(privateKeyHex);
            setPublicKey(publicKeyHex);
            setIsKeyGenerated(true);
            setShowKeyPopup(true);
        } catch (error) {
            setGlobalError(
                "An error occurred while generating the key pair. Please try again."
            );
        }
    };

    const handleCopyKey = (keyType) => {
        try {
            const keyText =
                keyType === "private"
                    ? privateKey
                    : `X: ${publicKey.x}\n\nY: ${publicKey.y}`;

            navigator.clipboard.writeText(keyText);
            setCopiedKey((prev) => ({ ...prev, [keyType]: true }));
            setTimeout(
                () => setCopiedKey((prev) => ({ ...prev, [keyType]: false })),
                2000
            );
        } catch (error) {
            setGlobalError(
                `Failed to copy the ${keyType} key. Please try again.`
            );
        }
    };

    const handleContinue = async () => {
        if (validateForm() && isKeyGenerated && isTermsAccepted) {
            try {
                const response = await axios.post(`${backendUrl}/register/`, {
                    formData,
                    publicKey,
                });
                if (!response) {
                    setGlobalError("some error occured!");
                    return;
                }
                localStorage.setItem("privateKey", privateKey);

                console.log("Signup form submitted", formData);
                navigate("/");
            } catch (error) {
                setGlobalError(
                    error.response?.data?.message ||
                        "Failed to complete the signup process. Please try again."
                );
            }
        } else {
            setGlobalError(
                "Please fill out all fields, accept terms, and generate keys before continuing."
            );
        }
    };

    return (
        <AuthLayout
            title="Create an account"
            subtitle="Enter your details to get started"
        >
            <div className="p-6 pt-0 space-y-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                {globalError && (
                    <div className="bg-red-100 dark:bg-red-900 border border-red-500 text-red-600 dark:text-red-300 rounded-lg p-4 mb-4 flex items-start space-x-2">
                        <XCircle className="w-6 h-6" />
                        <span>{globalError}</span>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <div className="relative">
                            <div className="group relative rounded-lg border border-gray-300 dark:border-gray-700 focus-within:border-purple-500 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-purple-500/20">
                                <label className="text-xs font-medium text-gray-500 dark:text-gray-400 group-focus-within:text-purple-600 dark:group-focus-within:text-purple-400">
                                    First Name
                                </label>
                                <input
                                    type={"text"}
                                    placeholder={"John"}
                                    name="firstName"
                                    onChange={handleInputChange}
                                    className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-0 text-gray-900 dark:text-white sm:leading-7"
                                />
                            </div>
                        </div>

                        {errors.firstName && (
                            <p className="text-xs text-red-500 mt-1">
                                {errors.firstName}
                            </p>
                        )}
                    </div>
                    <div>
                        <div className="relative">
                            <div className="group relative rounded-lg border border-gray-300 dark:border-gray-700 focus-within:border-purple-500 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-purple-500/20">
                                <label className="text-xs font-medium text-gray-500 dark:text-gray-400 group-focus-within:text-purple-600 dark:group-focus-within:text-purple-400">
                                    Last Name
                                </label>
                                <input
                                    type={"text"}
                                    placeholder={"Doe"}
                                    name="lastName"
                                    onChange={handleInputChange}
                                    className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-0 text-gray-900 dark:text-white sm:leading-7"
                                />
                            </div>
                        </div>

                        {errors.lastName && (
                            <p className="text-xs text-red-500 mt-1">
                                {errors.lastName}
                            </p>
                        )}
                    </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 border border-gray-300 dark:border-gray-700">
                    <Button onClick={genKeyPair} className="w-full">
                        Generate Key Pair
                    </Button>
                </div>

                {showKeyPopup && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                        <div className="bg-white dark:bg-gray-900 rounded-xl max-w-lg w-full shadow-2xl border border-purple-500/20">
                            {/* Header */}
                            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                                <div className="flex items-center space-x-2">
                                    <Shield className="text-purple-400 w-6 h-6" />
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                        Secure Your Keys
                                    </h2>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-6">
                                {/* Warning Message */}
                                <div className="flex items-start space-x-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                                    <AlertTriangle className="text-yellow-500 w-6 h-6 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-medium text-yellow-500">
                                            Important Security Notice
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            This is the only time your private
                                            key will be shown. Make sure to save
                                            it securely, as it cannot be
                                            retrieved later.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                                            Your Private Key
                                        </label>
                                        <div className="flex items-center space-x-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700">
                                            <span className="truncate text-gray-700 dark:text-white text-sm">
                                                {privateKey}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    handleCopyKey("private")
                                                }
                                                className="flex items-center space-x-1 text-purple-600 dark:text-purple-400 text-sm font-medium"
                                            >
                                                {copiedKey.private ? (
                                                    <Check className="w-4 h-4" />
                                                ) : (
                                                    <Copy className="w-4 h-4" />
                                                )}
                                                <span>Copy</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                                            Your Public Key
                                        </label>
                                        <div className="flex flex-col items-stretch p-3 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700">
                                            <span className="truncate text-gray-700 dark:text-white text-sm mb-1">
                                                X: {publicKey?.x}
                                            </span>
                                            <span className="truncate text-gray-700 dark:text-white text-sm">
                                                Y: {publicKey?.y}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    handleCopyKey("public")
                                                }
                                                className="flex items-center self-end space-x-1 text-purple-600 dark:text-purple-400 text-sm font-medium mt-2"
                                            >
                                                {copiedKey.public ? (
                                                    <Check className="w-4 h-4" />
                                                ) : (
                                                    <Copy className="w-4 h-4" />
                                                )}
                                                <span>Copy</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="bg-gray-50 dark:bg-gray-800 p-6 flex justify-end rounded-b-xl">
                                <Button onClick={() => setShowKeyPopup(false)}>
                                    Got it
                                </Button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex items-center space-x-3">
                    <input
                        type="checkbox"
                        id="termsCheckbox"
                        className="w-5 h-5"
                        checked={isTermsAccepted}
                        onChange={(e) => setIsTermsAccepted(e.target.checked)}
                    />
                    <label
                        htmlFor="termsCheckbox"
                        className="text-sm font-medium text-gray-600 dark:text-gray-400"
                    >
                        I accept the terms and conditions
                    </label>
                </div>

                <div className="pt-6">
                    <Button onClick={handleContinue} className="w-full">
                        Continue
                    </Button>
                </div>
            </div>
        </AuthLayout>
    );
};

export default Signup;
