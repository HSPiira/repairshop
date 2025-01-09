'use client' //works with the browser

import {useRouter} from "next/navigation"; //Yet to find out why navigation and not next/router
import {Button} from "@/components/ui/button"; //shadCn component
import {ButtonHTMLAttributes} from "react"; //kinda lets us extend out component to that of shadCN

//define props for this backButton
type BackButtonProps = {
    title: string;
    className?: string;
    variant?: "default" | "destructive" | "ghost" | "outline" | "secondary" | "link" | null | undefined;
}& ButtonHTMLAttributes<HTMLButtonElement>;

//export/expose the backButton function
export function BackButton(
    {title, className, variant, ...props}: BackButtonProps) {
    const router = useRouter();
    return (
        <Button
        className={className}
        title={title}
        variant={variant}
        onClick={() => router.back()}>{title}</Button>
    )
}