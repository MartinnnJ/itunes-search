**Vlastnosti aplikacie:**
- React + hooks (`useState`, `useRef`, `useEffect`).
- udaje sa medzi komponentami preposielaju cez `props` objekty.
- aplikacia nacitava vsetky pesnicky z iTunes API.
- aplikacia je plne responzivna a pouzitelna na mobilnych zariadeniach.
- funkcia `extractData` vyberie z response objektu iba dolezite data, ktore sa budu pouzivat.
- pomocou funkcie `pickRandomItem` sa vyberu vzdy ine prvky (pesnicky) z pola. To zabezpeci, ze pri rovnakom query sa zobrazia vzdy ine pesnicky.
- vzdy moze hrat iba jedna pesnicka, zabezpecuje to funkcia `handlePlay`.
- funkcia `shortenStringLength` odsekne retazec, ktory je dlhsi ako urceny pocet znakov a na jeho koniec prida `...` . Pouziva sa pri overovani dlzky nazvu pesnicky a albumu.
- zobrazenie zoznamu pesniciek cez animaciu zabezpecuje kniznica `framer-motion`.
- obrazky, resp. loga albumov sa zobrazia iba ak su uplne nacitane a pripravene na zobrazenie, kontrolujeme to stavom `isImageLoaded` a funkciou `displaySongContainer`. Tymto vieme predist neskoremu zobrazeniu obrazka, co zaroven znizuje aj UX pouzivatela.
- pesnicky sa fetch-uju stlacenim Enter, co odosle request na API. Pouziva sa pritom event `onSubmit`, ktory je zabezpeceny metodou zvanou **throttling**. Na implementaciu tejto metody sa pouziva kniznica `lodash.throttle`.

**Poznamky:**
- `audio` element nema event `onClick`, ale `onPlay`.
- aby sa `audio` element zobrazil, musi mat atribut `controls`.
- aby sa pesnicky VZDY zobrazili animaciou, je nutne, aby mali unikatne `key` hodnoty. To sa tyka pesniciek v aktualnom zozname, ale aj v nasledujucom zozname, ktory este len bude vytvoreny. Preto bolo potrebne vytvorit funkciu s nazvom `generateUniqueId`, ktora vygeneruje unikatne hodnoty pre vsetky pesnicky. Je to s toho dovodu, ze kniznica `framer-motion` zanimuje iba polozky, pri ktorych doslo k zmene, teda k zmene hodnoty `key`. Ak by sme ako `key` hodnoty pouzili cislovanie indexov, zoznam pesniciek by sa zobrazil animaciou iba po prvy krat. Druhy krat uz nie, pretoze nikdy nedojde k zmene hodnot indexov v zozname.
- event `onLoad` sa spusti ak je obrazok plne nacitany.