export default function DeprecatedWarning() {
  return (
    <div className="bg-orange-700 text-red-300 m-2 p-1 px-2 rounded-lg">
      <h1 className="text-4xl font-bold">Warning</h1>
      <p>
        The information you are about to read is for a product that has been
        deprecated and will only get bug fixes or functionality fixes.
      </p>
    </div>
  );
}
