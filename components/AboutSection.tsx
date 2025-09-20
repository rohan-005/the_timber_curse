export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-horror text-3xl md:text-4xl text-blood-red text-center mb-8">
          ABOUT THE GAME
        </h2>
        
        <div className="parchment p-8 md:p-12 rounded-lg">
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            &quot;The Timber Curse&quot; is a horror game set in the 1700s, where the main character Erika is trapped in a haunted forest with a cursed guide. Each time she sleeps, she awakens in a different cursed timeline for a limited time.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            There are 7 cursed items hidden across 3 timelines, each guarded by zombies. These must be destroyed to free Erika and her guide.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-center italic mt-8 text-red-700">
            Made using Unity and Blender, with assets from Unity Asset Store, Sketchfab, and Mixamo.
          </p>
        </div>
      </div>
    </section>
  )
}