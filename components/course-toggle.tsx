'use client';

interface CourseToggleProps {
  isToggled: boolean;
  setIsToggled: (value: boolean) => void;
}

export default function CourseToggle({ isToggled, setIsToggled }: CourseToggleProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex bg-purple-light/20 border border-purple-light/50 rounded-full p-1">
        <button
          onClick={() => setIsToggled(false)}
          className={`px-8 py-3 rounded-full font-inter font-semibold transition-all ${
            !isToggled
              ? 'bg-yellow-accent text-purple-main'
              : 'text-cream hover:text-yellow-accent'
          }`}
        >
          KOHORTA
        </button>
        <button
          onClick={() => setIsToggled(true)}
          className={`px-8 py-3 rounded-full font-inter font-semibold transition-all ${
            isToggled
              ? 'bg-yellow-accent text-purple-main'
              : 'text-cream hover:text-yellow-accent'
          }`}
        >
          FLEX
        </button>
      </div>
    </div>
  );
}




