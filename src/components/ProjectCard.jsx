import { Card, CardContent } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ExternalLink } from "lucide-react"
import { Button } from "./ui/button"
export function ProjectCard({ logo, name, description, websiteImages, technologies, websiteUrl }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className="w-40 h-40 flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-6">
            <img 
              src={logo || "/placeholder.svg"} 
              alt={`${name} logo`} 
              width={150} 
              height={150} 
              className="w-full h-auto" 
            />
          </CardContent>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent side="left" align="start" className="w-[400px] mb-3">
        <div>
          <Carousel>
            <CarouselContent>
              {websiteImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div>
                    <img 
                      src={image || "/placeholder.svg"} 
                      alt={`${name} website ${index + 1}`} 
                      width={300} 
                      height={200} 
                      className="w-full h-auto rounded-md" 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Technologies:</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="pt-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full flex items-center gap-2"
              onClick={() => window.open(websiteUrl)}
            >
              Visit Website
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}