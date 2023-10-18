import "./HistoryComponent.scss";

type Props = {};

const HistoryComponent = (props: Props) => {
    return (
        <section className="history-section">
            <div className="small-container">
                <p className="subtitle">Our History</p>
                <p className="title">Roberto Favellini</p>
                <p className="text">
                    a celebrated figure in the fashion world, decided to go
                    beyond haute couture and venture into the world of home
                    products. His inspiration was to create something intimate
                    and comforting, thus giving birth to Favellini. Since then,
                    we’ve been crafting exceptional bedding collections that
                    elevate your sleep experience.
                </p>
                <div className="history-img-wrapper">
                    <img
                        className="history-img"
                        src="images/history-section-img.jpg"
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};

export default HistoryComponent;
