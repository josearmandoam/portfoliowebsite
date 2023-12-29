import React from 'react'
import { Container, Html, Hr, Text, Row, Column, Section, Font, Heading, Img } from "@react-email/components";

export default function ContactFormEmail(props: any) {
  return (
    <Html lang="en" dir="ltr">
      <Container className='w-full bg-gray-600 flex items-center justify-center p-8'>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Heading className='text-2xl'>Message from "Contact Form" from your personal portfolio</Heading>
        <Section>
          <Hr />
          <Row>
            <Text className='font-bold'>Send from: </Text><Text>Personal Porfolio</Text>
            <Text className='font-bold'>Email:</Text><Text className='font-normal'>{props.email}</Text>
            <Text className='font-bold'>Message:</Text><Text className='font-normal'>{props.message}</Text>
          </Row>
          <Hr />
        </Section>
        <Hr />
        <Container className='flex items-center justify-center'>
          <Img src="./project1.png" alt="Logo" width="300" height="300"
            className='rounded-md p-4'
          />
        </Container>
      </Container>
    </Html>
  )
}
