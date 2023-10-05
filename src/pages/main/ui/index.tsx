import { PageLayout } from "shared/ui/pageLayout";
import { NavLink } from "shared/ui/navLink";
import { RoutePath } from "shared/config/routes";

const MainPage = () => {

    return (
        <PageLayout headerSlot={<h1>Список страниц</h1>}>
            <NavLink to={RoutePath.templateEditor}>
                Визуальный редактор писем
            </NavLink>
        </PageLayout>
    )
}

export default MainPage;