"use client"

import React, { useState } from "react"
import Button from "./ui/Button"
import { signIn, signOut } from "next-auth/react"
import { toast } from "./ui/Toast"

type Props = {}

const SignOutButton = (props: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signUserOut = async () => {
    setIsLoading(true)
    try {
      await signOut()
    } catch (error) {
      toast({
        title: "Error signing out",
        message: "Please try again later",
        type: "error",
      })
    }
  }

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign Out
    </Button>
  )
}

export default SignOutButton
