import { useOffers } from '../../hooks/useOffers';
import OfferCard from '../../components/OfferCard';

export default function OfferList() {
  const { data: offers = [], isLoading } = useOffers({ limit: 100 });

  if (isLoading) return <p>Cargando…</p>;

  return (
    <div className="grid gap-4">
      {offers.map(o => <OfferCard key={o.id} offer={o} />)}
    </div>
  );
}