export function Bookmark() {
  const handleClick = () => {
    alert(
      "You can add this page to your bookmarks by pressing " +
        (navigator.userAgent.toLowerCase().indexOf("mac") != -1
          ? "Command/Cmd"
          : "CTRL") +
        " + D on your keyboard."
    );
  };

  return (
    <button
      className="border rounded-full w-12 h-12 text-center text-neutral-600 border-neutral-500"
      onClick={handleClick}
    >
      B
    </button>
  );
}

export default Bookmark;
