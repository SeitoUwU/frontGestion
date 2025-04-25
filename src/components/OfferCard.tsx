export default function OfferCard({ offer }) {
    return (
        <article className="rounded shadow p-4">
            <h2 className="font-semibold">{offer.titulo}</h2>
            <p>{offer.descripcion}</p>
            <p className="text-sm text-gray-500">Experiencia mínima: {offer.experiencia} años</p>
        </article>
    );
}