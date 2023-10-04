import { PageLayout } from "shared/ui/pageLayout";
import { BackBtn } from "shared/ui/backBtn";
import { Wysiwyg } from "shared/ui/wysiwyg";

const EmailEditor = () => {

    return (
        <PageLayout headerSlot={<BackBtn />}>
            <Wysiwyg />
        </PageLayout>
    )
}

export default EmailEditor;