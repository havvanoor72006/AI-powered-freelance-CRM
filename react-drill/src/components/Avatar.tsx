
function Avatar({ name }: { name: string }) {
  return (
    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-2xl font-bold">
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

export default Avatar;
