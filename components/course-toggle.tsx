'use client';

interface CourseToggleProps {
  isToggled: boolean;
  setIsToggled: (value: boolean) => void;
}

export default function CourseToggle({ isToggled, setIsToggled }: CourseToggleProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex bg-[#FFFBEB]/15 border border-[#FFFBEB]/30 rounded-full p-1">
        <button
          onClick={() => setIsToggled(false)}
          className={`px-8 py-3 rounded-full font-inter font-semibold transition-all ${
            !isToggled
              ? 'bg-yellow-accent text-black'
              : 'text-cream hover:text-yellow-accent'
          }`}
        >
          KOHORTA
        </button>
        <button
          onClick={() => setIsToggled(true)}
          className={`px-8 py-3 rounded-full font-inter font-semibold transition-all ${
            isToggled
              ? 'bg-yellow-accent text-black'
              : 'text-cream hover:text-yellow-accent'
          }`}
        >
          FLEX
        </button>
      </div>
    </div>
  );
}




