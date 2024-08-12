export default function Loading() {
  return (
    <div className="absolute w-full h-full top-0 left-0 bg-white z-40 flex justify-center items-center">
      <video src={"OvaTech.mp4"} className="w-24 h-24 object-cover" autoPlay muted playsInline loop />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
