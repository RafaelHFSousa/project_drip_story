import {
    SectionContainer,
    SectionTitle,
    CollectionsList,
    CollectionItem,
    IconCircle,
    CollectionLabel
} from './styled';

// 1. Estrutura de dados para as coleções
const collectionsData = [
    { name: 'Camisetas', icon: 'pi pi-tag', isActive: true }, // 'pi-tag' como substituto
    { name: 'Calças', icon: 'pi pi-tag', isActive: false }, // 'pi-tag' como substituto
    { name: 'Bonés', icon: 'pi pi-tag', isActive: false }, // 'pi-tag' como substituto
    { name: 'Headphones', icon: 'pi pi-headphones', isActive: false }, // Combinação perfeita!
    { name: 'Tênis', icon: 'pi pi-tag', isActive: false }, // 'pi-tag' como substituto
];


export const ColecoesDestaque2 = () => {
    return (
        <SectionContainer>
            <SectionTitle>Coleções em destaque</SectionTitle>
            <CollectionsList>
                {collectionsData.map((collection) => (
                    <CollectionItem key={collection.name}>
                        <IconCircle $isActive={collection.isActive}>
                            <i className={collection.icon}></i>
                        </IconCircle>
                        <CollectionLabel>{collection.name}</CollectionLabel>
                    </CollectionItem>
                ))}
            </CollectionsList>
        </SectionContainer>
    );
};