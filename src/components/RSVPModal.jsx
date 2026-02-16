export default function RSVPModal({ close }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center w-[400px]">
        <h2 className="text-2xl font-bold text-green-600">
          🎉 You're Registered!
        </h2>
        <p className="text-gray-500 mt-3">
          See you at the event!
        </p>
        <button
          onClick={close}
          className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
