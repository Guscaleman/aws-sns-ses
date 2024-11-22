import { SESClient, CreateTemplateCommand } from "@aws-sdk/client-ses";
import dotenv from 'dotenv';
dotenv.config();

const ses = new SESClient({
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY
    }
});

const run = async (templateName) => {
    const createTemplateCommand = new CreateTemplateCommand({
        Template: {
            TemplateName: templateName,
            HtmlPart: `
            <h1>Olá, {{name}}!</h1>
            <p>
            Bem-vindo à SmartVida!
            </p>
            `,
            TextPart: `Olá, {{name}}! Bem-vindo à SmartVida!`,
            SubjectPart: `Cadastrado com sucesso`
        }
    })

    try {
        const res = await ses.send(createTemplateCommand);
        console.log(`Template ${templateName} has been created!`, res);
    } catch (error) {
        console.log(`Failed to create template ${templateName}`, error)
    }
}

run('SESTemplate');