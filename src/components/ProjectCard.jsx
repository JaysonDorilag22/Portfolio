import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel"
export function ProjectCard({ logo, name, description, technologies, websiteUrl,websiteImages }) {
  return (
    <Card className="w-[350px]">
    <CardHeader>
      <CardTitle className="flex justify-between items-center">
        <span>{name}</span>
        <img src={logo} alt={name} className="w-8 h-8" />
      </CardTitle>
    </CardHeader>
  
    <CardContent className="p-0">
      <Carousel>
        <CarouselContent>
          {websiteImages.map((image, index) => (
            <CarouselItem key={index}>
              <img 
                src={image} 
                alt={`${name} screenshot ${index + 1}`} 
                className="w-full h-48 object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </CardContent>
  
    <CardDescription className="p-4">
      {description}
    </CardDescription>
  
    <CardContent className="pt-0">
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </CardContent>
  
    <CardFooter>
      <Button 
        variant="outline" 
        className="w-full flex items-center gap-2"
        onClick={() => window.open(websiteUrl, '_blank', 'noopener,noreferrer')}
      >
        Visit Website
        <ExternalLink className="h-4 w-4" />
      </Button>
    </CardFooter>
  </Card>
  )
}