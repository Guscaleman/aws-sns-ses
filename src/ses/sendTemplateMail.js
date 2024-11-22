import { SESClient, SendTemplatedEmailCommand } from "@aws-sdk/client-ses";
import dotenv from 'dotenv';
dotenv.config();

const ses = new SESClient({
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY
    }
});

const sendTemplateMail = async (templateName, recipientEmail) => {
    const sendTemplatedEmailCommand = new SendTemplatedEmailCommand({
        Destination: {
            ToAddresses: [
                recipientEmail
            ],
        },
        Source: process.env.AWS_SES_SENDER,
        Template: templateName,
        TemplateData: JSON.stringify({ name: "Gustavo"})
    })

    try {
        const res = await ses.send(sendTemplatedEmailCommand);
        console.log(`Template mail ${templateName} has been sent!`, res);
    } catch (error) {
        console.log(`Failed to send ${templateName}.`, error);
    }
}

sendTemplateMail("SESTemplate", process.env.AWS_SES_SENDER);