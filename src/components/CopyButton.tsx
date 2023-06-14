"use client"

import React, {ButtonHTMLAttributes, FunctionComponent} from "react"
import Button from "@/ui/Button"
import {toast} from "@/ui/Toast"
import {Copy} from "lucide-react"

interface OwnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    valueToCopy: string
}

type Props = OwnProps;

const CopyButton: FunctionComponent<Props> = ({valueToCopy, className, ...props}) => {

    return <Button {...props} onClick={() => {
        navigator.clipboard.writeText(valueToCopy)
        toast({
            title: "Copied!",
            message: "API key copied to clipboard.",
            type: "success"
        })
    }} variant="ghost" className={className}>
        <Copy className="h-5 w-5"/>
    </Button>
}

export default CopyButton
