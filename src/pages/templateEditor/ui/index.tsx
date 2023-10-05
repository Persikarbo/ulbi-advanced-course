import { PageLayout } from "shared/ui/pageLayout";
import { BackBtn } from "shared/ui/backBtn";
import { TemplateEditor } from "widgets/templateEditor";

const TemplateEditorPage = () => {

    return (
        <PageLayout headerSlot={<BackBtn />}>
            <TemplateEditor />
        </PageLayout>
    )
}

export default TemplateEditorPage;