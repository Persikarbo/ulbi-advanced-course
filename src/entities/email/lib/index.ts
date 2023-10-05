import { EmailTemplateBlocks } from "entities/email";

export const getEmailTemplate = ({ body, header, footer }: EmailTemplateBlocks): string => {

    return `<!DOCTYPE html>
                <html lang="ru">
                    <head>
                        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                        <meta name="viewport" content="width=600, user-scalable=no">
                        <meta name="robots" content="noindex, nofollow" />
                        <title>Здесь должен быть заголовок</title>
                    </head>
                <body>
                    <style>
                        body {
                
                            background: #f5f5f5;
                        }
                
                        p {
                            margin: 0;
                            font-family: 'Arial', sans-serif;
                            font-size: 16px;
                            line-height: 24px;
                            font-weight: 400;
                            color: #000;
                        }
                
                        ul {
                            line-height: 24px;
                        }
                
                        a,
                        a:visited {
                            text-decoration: underline;
                            font-family: 'Arial', sans-serif;
                            font-size: 16px;
                            line-height: 24px;
                        }
                    </style>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 750px; margin: 0 auto; background: #f5f5f5">
                        <tbody>

                            ${ header ? `<tr style="background-color: #70983e">
                                <td style="padding: 24px;">
                                    ${header}
                                </td>
                            </tr>` : "" }
                            
                            <tr style="padding: 24px;">
                                <td>
                                    ${body}
                                </td>
                            </tr>
                            
                            ${ footer ? `<tr>
                                <td style="padding: 24px;">
                                    ${footer}
                                </td>
                            </tr>` : "" }
                        </tbody>
                    </table>
                </body>
            </html>
`
}