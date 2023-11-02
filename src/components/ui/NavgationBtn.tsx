export function NavgationBtn() {
  return (
    <div className="z-50 w-full">
      <div className="w-full">
        <div
          className="grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-black rounded-lg"
          role="group" >
          <button
            type="button"
            className="px-5 py-1.5 text-xs font-medium rounded-lg hover:bg-background" >
            Front-end
          </button>
          <button
            type="button"
            className="px-5 py-1.5 text-xs font-medium rounded-lg bg-white text-black" >
            Back-end
          </button>
          <button
            type="button"
            className="px-5 py-1.5 text-xs font-medium rounded-lg hover:bg-background" >
            Outros
          </button>
        </div>
      </div>
    </div>
  );
}