import OnboardingPanel from "../components/OnboardingPanel";
import MainLayout from "./MainLayout";

export default function EntryLayout({ children, activeTab }) {
    return <MainLayout subtitle={activeTab} navbar={false}>
        <div id="entrylayout">
            <OnboardingPanel></OnboardingPanel>
            {children}
            <style global jsx>
                {
                    `
            #entrylayout {
                min-width: 95%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
            }
            #entrylayout > * {
                flex: 1;
                min-height: 90vh;
                margin-right: 10px;
            }
            `
                }
            </style>
        </div>

    </MainLayout>
}
