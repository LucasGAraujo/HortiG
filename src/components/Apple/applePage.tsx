import { useMemo, useState } from 'react';
import './ApplePage.css';

const appleVarieties = [
    'Fuji',
    'Gala',
    'Pink Lady',
    'Red Delicious',
    'Golden Delicious',
    'Granny Smith',
    'Honeycrisp',
    'McIntosh',
    'Braeburn',
    'Jazz',
    'Ambrosia',
    'Empire',
    'Jonagold',
    'Cortland',
    'Envy',
    'Cosmic Crisp',
    'Arkansas Black',
    'Cameo',
    'Opal',
    'Liberty',
];

const apples = Array.from(
    { length: 1000 },
    (_, index) => {
        const variety =
            appleVarieties[
                index % appleVarieties.length
            ];

        return {
            id: index,
            name: `${variety} ${index + 1}`,
            price: (
                Math.random() * 20 +
                5
            ).toFixed(2),

            image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1200&auto=format&fit=crop',
        };
    }
);

const ApplePage = () => {
     const [inputValue, setInputValue] =
        useState('');
    const [filteredApples, setFilteredApples] =
        useState(apples);
    const handleSearch = () => {
            /**
             * Simula busca pesada
             * em lista enorme
             */
            const result = apples.filter((apple) =>
                apple.name
                    .toLowerCase()
                    .includes(inputValue.toLowerCase())
            );

            setFilteredApples(result);
        };
    return (
        <main className="apple-page">
            <header className="apple-header">
                <div>
                    <h1>Maçã</h1>

                    <p>
                        varios tipos
                    </p>
                </div>

                <div className="apple-header__search">
                    <input
                        type="text"
                        placeholder="Buscar maçã..."
                        value={inputValue}
                        onInput={(e: any) =>
                            setInputValue(
                                e.target.value
                            )
                        }
                        autoComplete="search"
                        name="search"
                    />
                    <button onClick={handleSearch}>
                        Buscar
                    </button>
                </div>
            </header>

            <section className="apple-grid">
                {filteredApples.map((apple) => (
                    <article
                        key={apple.id}
                        className="apple-card"
                    >
                        <img
                            src={apple.image}
                            alt={apple.name}
                        />

                        <div className="apple-card__content">
                            <h2 aria-label={apple.name || "Nome da maçã indisponível"}>
                                {apple.name || "Nome da maçã indisponível"}
                            </h2>

                            <span>
                                R$ {apple.price}
                            </span>

                            <button>
                                Adicionar ao carrinho
                            </button>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
};

export default ApplePage;