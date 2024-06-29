export default function Loading() {
  return (
    <div className="absolute top-0 bg-white w-full h-[80vh] flex justify-center items-center">
      <div>
        <video src={"OvaTech.mp4"} className="w-24 h-24 object-cover" autoPlay muted playsInline loop />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
