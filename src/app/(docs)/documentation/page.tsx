import React from "react"
import type {Metadata} from "next"
import LargeHeading from "@/components/ui/LargeHeading"
import Paragraph from "@/components/ui/Paragraph"
import DocumentationTabs from "@/components/DocumentationTabs"
import "simplebar-react/dist/simplebar.min.css"

export const metadata: Metadata = {
    title: "Similarity API | Documentation",
    description: "Free and Open-Soruce text similarity API",
}

type Props = {}

const page = (props: Props) => {
    return (
        <div className="container max-w-7xl mx-auto mt-12">
            <div className="flex flex-col items-center gap-6">
                <LargeHeading>Making a request</LargeHeading>
                <Paragraph>api/v1/similarity</Paragraph>
                <DocumentationTabs/>
            </div>
        </div>
    )
}

export default page
