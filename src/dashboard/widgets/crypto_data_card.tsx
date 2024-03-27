import { CryptoData } from "../data/types";

interface CryptoDataCardProps {
  cryptoData: CryptoData;
}

const CryptoDataCard: React.FC<CryptoDataCardProps> = ({ cryptoData }) => {
  return (
    <div className="flex h-32 w-64 flex-shrink-0 flex-grow-0 items-center justify-between rounded-md bg-red-300 p-4">
      <div className="flex items-center gap-2">
        <img
          src={cryptoData.image}
          alt={`${cryptoData.name} img`}
          className="h-10 w-10"
        />
        <div>
          <h6 className="text-xs font-bold uppercase text-gray-500">
            {cryptoData.name}
          </h6>
          <h5 className="font-bold">{cryptoData.marketCap}</h5>
        </div>
      </div>
      {/* icon of arrow up like in stock market data increase green  */}
    </div>
  );
};

export default CryptoDataCard;
