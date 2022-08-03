import ContainerLayout from "./ContainerLayout";

export default function EntryLayout({ children, activeTab }) {
    return <ContainerLayout subtitle={activeTab}>
        <div id="entrylayout">
            {children}
            <style global jsx>
                {
                    `
            body {
                background-color: white;
            }
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

    </ContainerLayout>
}
