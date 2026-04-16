import { ArrowBigDown, ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
    {

        title: "iBuiltThis",
        description:
            "This is full-stack project that allow you to showcase your projects with the community",
        image: "/projects/project6.png",
        tags: ["React", "Next.js", "Typescript", "Shadcn", "Tailwind", "Clerk", "Neon", "Drizzle-ORM", "Zod"],
        link: "https://showcase-apps-pied.vercel.app/",
        github: "https://github.com/ARJ99/ShowcaseApps",
    },
    {

        title: "JobTracker",
        description:
            "This is full-stack project that allow you to showcase your projects with the community",
        image: "/projects/project5.png",
        tags: ["React", "Next.js", "Typescript", "Shadcn", "Tailwind", "betterAuth", "MongoDB",],
        link: "https://application-tracker-swart.vercel.app/",
        github: "https://github.com/ARJ99/ApplicationTracker",
    },
    {

        title: "Project Management Tool",
        description:
            "This is a landing page where I used the best practices.",
        image: "/projects/project4.png",
        tags: ["React", "Tailwind"],
        link: "https://code-flow-bice.vercel.app/",
        github: "https://github.com/ARJ99/CodeFlow",
    },

    {
        title: "To do List",
        description:
            "This is a simple CRUD using React to internilize how reacts works.",
        image: "/projects/todolist.png",
        tags: ["React", "Tailwind",],
        link: "https://todo-react-eight-kappa.vercel.app",
        github: "https://github.com/ARJ99/Todo-React",
    },
    {
        title: "E-Commerce Platform",
        description:
            "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
        image: "/projects/project2.png",
        tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
        link: "#",
        github: "#",
    },
    {
        title: "Fintech Dashboard",
        description:
            "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
        image: "/projects/project1.png",
        tags: ["React", "Typescript", "NodeJS"],
        link: "#",
        github: "#",
    },
];
export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">

            {/* Background glow */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl animate-pulse" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Feature Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white "> make an impact.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of my recen work, from complex web applications to innovative tools that solve real-wordl problems.
                    </p>
                </div>

                {/* Project grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>

                            {/* Image of project */}
                            <div className="relative overflow-hidden aspect-video">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-900 group-hover:scale-110" />

                                {/* Decrease bright on the cards */}
                                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground"> <ArrowUpRight className="w-5 h-5" /></a>
                                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground"> <Github className="w-5 h-5" /> </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                                <p className="text-muted-foreground text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">{project.tags.map((tag, tagIdx) => (
                                    <span key={tagIdx} className="px-4 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300">{tag}</span>
                                ))}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View all projects */}
                <div className="text-center mt-12 animate-fade-in delay-500">
                    <a href="https://github.com/ARJ99">
                        <AnimatedBorderButton>
                            View All Projects
                            <ArrowUpRight className="w-5 h-5 " />
                        </AnimatedBorderButton>
                    </a>
                </div>
            </div>
        </section>
    )
}
