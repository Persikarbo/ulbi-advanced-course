import { PageLayout } from "shared/ui/pageLayout";
import { NavLink } from "shared/ui/navLink";
import { RoutePath } from "shared/config/routes";

const Main = () => {

    return (
        <PageLayout headerSlot={<h1>Список страниц</h1>}>
            <NavLink to={RoutePath.emailEditor}>
                Визуальный редактор писем
            </NavLink>
        </PageLayout>
    )
}

export default Main;