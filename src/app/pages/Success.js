import React from "react";
import Wrapper from "@/Comps/Wrapper";
import Link from "next/link";

const Success = () => {
    return (
        <div className="min-h-[650px] flex items-center">
            <Wrapper>
                <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
                    <div className="text-2xl font-bold">
                        Merci d`&apos;`avoir acheté chez nous!
                    </div>
                    <div className="text-lg font-bold mt-2">
                        Votre commande a été passée avec succès.
                    </div>
                    <div className="text-base mt-5">
                        Pour toute question relative au produit, envoyez un e-mail à
                    </div>
                    <div className="underline">Productshopcontact@safer.ci</div>
                    <div className="flex items-center">
                        <Link 
                            href="/"
                            className="py-4 px-8 rounded-full bg-indigo-600 text-white text-lg font-medium transition-transform active:scale-95 mt-4"
                        >
                            Continuer vos achats
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Success;
