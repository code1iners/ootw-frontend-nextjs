import CurrentTemperature from "@/components/CurrentTemperature";
import DailyOutfitOfThrWeather from "@/components/DailyOutfitOfThrWeather";
import UserGuard from "@/components/UserGuard";

const Home = () => {
  return (
    <UserGuard>
      <section className="flex flex-col">
        <CurrentTemperature />
        <DailyOutfitOfThrWeather />
      </section>
    </UserGuard>
  );
};

export default Home;
