"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CalendarIcon,
  MapPin,
  Clock,
  Users,
  Search,
  Filter,
  ExternalLink,
  Share2,
  Heart,
  Camera,
  Video,
  Music,
  Globe,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { pastEvents, upcomingEvents } from "@/data/events";

export default function EventsClient() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredUpcomingEvents = upcomingEvents.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      event.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "cultural":
        return <Music className="h-4 w-4" />;
      case "academic":
        return <GraduationCap className="h-4 w-4" />;
      case "community":
        return <Users className="h-4 w-4" />;
      default:
        return <CalendarIcon className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "cultural":
        return "bg-orange-100 text-orange-800";
      case "academic":
        return "bg-blue-100 text-blue-800";
      case "community":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="community">Community</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <CalendarIcon className="h-4 w-4 mr-2" />
                Calendar View
              </Button>
              <Button className="bg-orange-600 hover:bg-orange-700">
                <ExternalLink className="h-4 w-4 mr-2" />
                Subscribe to Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-8">
              {/* Featured Events */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Featured Events
                </h2>
                <div className="grid lg:grid-cols-2 gap-8">
                  {filteredUpcomingEvents
                    .filter((event) => event.featured)
                    .map((event) => (
                      <Card
                        key={event.id}
                        className="overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="relative">
                          <Image
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            width={400}
                            height={200}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className={getCategoryColor(event.category)}>
                              {getCategoryIcon(event.category)}
                              <span className="ml-1">{event.category}</span>
                            </Badge>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-red-100 text-red-800">
                              Featured
                            </Badge>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-xl">
                            {event.title}
                          </CardTitle>
                          <CardDescription className="text-gray-600">
                            {event.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3 mb-4">
                            <div className="flex items-center text-sm text-gray-600">
                              <CalendarIcon className="h-4 w-4 mr-2" />
                              {event.date}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Clock className="h-4 w-4 mr-2" />
                              {event.time}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin className="h-4 w-4 mr-2" />
                              {event.location}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Users className="h-4 w-4 mr-2" />
                              {event.attendees} expected attendees
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {event.tags.map((tag, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-lg font-semibold text-green-600">
                              {event.price}
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Share2 className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Heart className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                className="bg-orange-600 hover:bg-orange-700"
                              >
                                Register
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>

              {/* All Upcoming Events */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  All Upcoming Events
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredUpcomingEvents
                    .filter((event) => !event.featured)
                    .map((event) => (
                      <Card
                        key={event.id}
                        className="hover:shadow-lg transition-shadow"
                      >
                        <div className="relative">
                          <Image
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            width={300}
                            height={150}
                            className="w-full h-32 object-cover rounded-t-lg"
                          />
                          <div className="absolute top-2 left-2">
                            <Badge className={getCategoryColor(event.category)}>
                              {getCategoryIcon(event.category)}
                              <span className="ml-1">{event.category}</span>
                            </Badge>
                          </div>
                        </div>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">
                            {event.title}
                          </CardTitle>
                          <CardDescription className="text-sm line-clamp-2">
                            {event.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-xs text-gray-600">
                              <CalendarIcon className="h-3 w-3 mr-2" />
                              {event.date}
                            </div>
                            <div className="flex items-center text-xs text-gray-600">
                              <MapPin className="h-3 w-3 mr-2" />
                              {event.location}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-semibold text-green-600">
                              {event.price}
                            </div>
                            <Button
                              size="sm"
                              className="bg-orange-600 hover:bg-orange-700"
                            >
                              Register
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="past" className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Past Events
                </h2>
                <p className="text-lg text-gray-600">
                  Relive the memories from our previous gatherings and
                  celebrations
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pastEvents.map((event) => (
                    <Card
                      key={event.id}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <div className="relative">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          width={300}
                          height={150}
                          className="w-full h-32 object-cover rounded-t-lg"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge className={getCategoryColor(event.category)}>
                            {getCategoryIcon(event.category)}
                            <span className="ml-1">{event.category}</span>
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {event.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-xs text-gray-600">
                            <CalendarIcon className="h-3 w-3 mr-2" />
                            {event.date}
                          </div>
                          <div className="flex items-center text-xs text-gray-600">
                            <MapPin className="h-3 w-3 mr-2" />
                            {event.location}
                          </div>
                          <div className="flex items-center text-xs text-gray-600">
                            <Users className="h-3 w-3 mr-2" />
                            {event.attendees} attendees
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Camera className="h-4 w-4 mr-1" />
                              {event.media.photos}
                            </div>
                            <div className="flex items-center">
                              <Video className="h-4 w-4 mr-1" />
                              {event.media.videos}
                            </div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="w-full">
                          View Media Gallery
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="calendar" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Event Calendar</CardTitle>
                      <CardDescription>
                        Click on a date to see events scheduled for that day
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border"
                      />
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          This Month
                        </span>
                        <span className="font-semibold">6 Events</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          Next Month
                        </span>
                        <span className="font-semibold">4 Events</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          Total Attendees
                        </span>
                        <span className="font-semibold">620</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Event Categories</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                          <span className="text-sm">Cultural</span>
                        </div>
                        <span className="text-sm font-semibold">40%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                          <span className="text-sm">Academic</span>
                        </div>
                        <span className="text-sm font-semibold">35%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-sm">Community</span>
                        </div>
                        <span className="text-sm font-semibold">25%</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Subscribe to Events</CardTitle>
                      <CardDescription>
                        Get notified about upcoming events
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">
                        <Globe className="h-4 w-4 mr-2" />
                        Add to Calendar
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
