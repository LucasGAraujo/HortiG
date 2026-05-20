import { useState } from 'react';

import FakeSupportChat from './SupportChat/fakeSupportChat';

import './BananaPage.css';

const BananaPage = () => {
    const [clicked, setClicked] =
        useState(false);

    const handleClick = () => {
        setClicked(true);

        alert('Clique executado');
    };

    return (
        <main className="banana-page">
            <section className="banana-hero">
                <div className="banana-content">
                    <span className="banana-badge">
                        Fruta tropical
                    </span>

                    <h1>
                        Banana Premium
                    </h1>

                    <p>
                        Rica em potássio, energia e
                        perfeita para o dia a dia.
                    </p>

                    <button
                        onClick={handleClick}
                        aria-label={clicked ? 'Clicado' : 'Comprar agora'}
                    >
                        {clicked
                            ? 'Clicado ✓'
                            : 'Comprar agora'}
                    </button>
                </div>

                <div className="banana-image">
                    <img
                            src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=1600&auto=format&fit=crop"
                        alt="Bananas"
                    />
                </div>
            </section>

            <FakeSupportChat />
        </main>
    );
};

export default BananaPage;