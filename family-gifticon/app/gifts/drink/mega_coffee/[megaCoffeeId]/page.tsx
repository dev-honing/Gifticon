export default function MegaCoffeeDetails({
  params,
}: {
  params: { megaCoffeeId: string };
}) {
  return (
    <div>
      <h1>현재 URL: /gifts/drink/mega_coffee/{params.megaCoffeeId}</h1>
    </div>
  );
}