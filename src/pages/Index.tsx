import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

function Index() {
  const [activeSection, setActiveSection] = useState('home')

  const projects = [
    {
      id: 1,
      title: "Городские Тени",
      genre: "Драма",
      year: "2024",
      description: "История о жизни в мегаполисе глазами простых людей",
      image: "/img/adbfa940-bb83-480e-99d9-32ce8671d45f.jpg",
      status: "В производстве"
    },
    {
      id: 2,
      title: "Звездный Путь",
      genre: "Фантастика",
      year: "2023",
      description: "Эпическое путешествие к далеким галактикам",
      image: "/img/adbfa940-bb83-480e-99d9-32ce8671d45f.jpg",
      status: "Постпродакшн"
    },
    {
      id: 3,
      title: "Летние Воспоминания",
      genre: "Комедия",
      year: "2024",
      description: "Легкая комедия о дружбе и приключениях",
      image: "/img/adbfa940-bb83-480e-99d9-32ce8671d45f.jpg",
      status: "Релиз"
    }
  ]

  const team = [
    {
      name: "Анна Волкова",
      role: "Режиссер",
      experience: "15+ лет",
      image: "/img/cbfa0295-c408-41f1-8f23-e57dae62e98f.jpg"
    },
    {
      name: "Михаил Петров",
      role: "Продюсер",
      experience: "12+ лет", 
      image: "/img/cbfa0295-c408-41f1-8f23-e57dae62e98f.jpg"
    },
    {
      name: "Елена Сидорова",
      role: "Оператор",
      experience: "10+ лет",
      image: "/img/cbfa0295-c408-41f1-8f23-e57dae62e98f.jpg"
    }
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black text-white font-open-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cinematic-gray-dark">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-montserrat font-bold from-cinematic-orange to-cinematic-orange-dark text-transparent mx-0 rounded-none px-0 bg-transparent">Studio U37</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'projects', label: 'Проекты' },
                { id: 'team', label: 'Команда' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-300 hover:text-cinematic-orange ${
                    activeSection === item.id ? 'text-cinematic-orange' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="/img/cbfa0295-c408-41f1-8f23-e57dae62e98f.jpg" 
            alt="Film Production"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-20 text-center max-w-4xl px-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-montserrat font-black mb-6 leading-tight">
            СОЗДАЕМ
            <span className="block bg-gradient-to-r from-cinematic-orange to-cinematic-orange-dark bg-clip-text text-transparent">
              КИНО
            </span>
            БУДУЩЕГО
          </h1>
          <p className="text-xl md:text-2xl text-cinematic-gray-light mb-8 max-w-2xl mx-auto">
            Профессиональная кинокомпания с 15-летним опытом создания незабываемых визуальных историй
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cinematic-orange to-cinematic-orange-dark hover:from-cinematic-orange-dark hover:to-cinematic-orange text-white font-montserrat font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть Проекты
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-cinematic-orange text-cinematic-orange hover:bg-cinematic-orange hover:text-black font-montserrat font-semibold px-8 py-3 rounded-full transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться с Нами
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-black to-cinematic-gray-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Наши <span className="text-cinematic-orange">Проекты</span>
            </h2>
            <p className="text-xl text-cinematic-gray-light max-w-3xl mx-auto">
              От концепции до релиза — каждый проект создается с особым вниманием к деталям и инновационным подходом
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="bg-cinematic-gray-dark border-cinematic-gray-dark hover:border-cinematic-orange transition-all duration-300 transform hover:scale-105 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-cinematic-orange text-black font-montserrat font-semibold">
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white font-montserrat text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-cinematic-gray-light">
                    {project.genre} • {project.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-cinematic-gray-light mb-4">{project.description}</p>
                  <Button 
                    className="w-full bg-cinematic-orange hover:bg-cinematic-orange-dark text-black font-montserrat font-semibold"
                  >
                    <Icon name="Play" size={16} className="mr-2" />
                    Смотреть Трейлер
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Наша <span className="text-cinematic-orange">Команда</span>
            </h2>
            <p className="text-xl text-cinematic-gray-light max-w-3xl mx-auto">
              Профессионалы с мировым опытом, объединенные общей страстью к кинематографу
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className="bg-cinematic-gray-dark border-cinematic-gray-dark hover:border-cinematic-orange transition-all duration-300 transform hover:scale-105 animate-scale-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-cinematic-orange">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-white font-montserrat text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-cinematic-orange font-semibold text-lg">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-cinematic-gray-light">{member.experience} в индустрии</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-cinematic-gray-dark to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              <span className="text-cinematic-orange">Портфолио</span> & Достижения
            </h2>
            <p className="text-xl text-cinematic-gray-light max-w-3xl mx-auto">
              Наши работы получили признание на международных кинофестивалях и завоевали сердца миллионов зрителей
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "50+", subtitle: "Завершенных проектов", icon: "Film" },
              { title: "15", subtitle: "Лет на рынке", icon: "Award" },
              { title: "100M+", subtitle: "Просмотров", icon: "Eye" },
              { title: "25+", subtitle: "Наград", icon: "Trophy" }
            ].map((stat, index) => (
              <Card 
                key={stat.title}
                className="bg-black border-cinematic-gray-dark hover:border-cinematic-orange transition-all duration-300 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <Icon name={stat.icon as any} size={48} className="text-cinematic-orange mx-auto mb-4" />
                  <h3 className="text-3xl font-montserrat font-bold text-white mb-2">{stat.title}</h3>
                  <p className="text-cinematic-gray-light">{stat.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Готовы к <span className="text-cinematic-orange">Сотрудничеству?</span>
            </h2>
            <p className="text-xl text-cinematic-gray-light max-w-3xl mx-auto">
              Свяжитесь с нами для обсуждения вашего проекта. Мы превратим ваши идеи в кинематографическую реальность
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-cinematic-gray-dark border-cinematic-gray-dark">
              <CardHeader>
                <CardTitle className="text-white font-montserrat text-2xl text-center">
                  Отправить Запрос
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-cinematic-gray-light">Имя</label>
                    <Input 
                      placeholder="Ваше имя"
                      className="bg-black border-cinematic-gray-dark focus:border-cinematic-orange text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-cinematic-gray-light">Email</label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      className="bg-black border-cinematic-gray-dark focus:border-cinematic-orange text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-cinematic-gray-light">Тип проекта</label>
                  <Input 
                    placeholder="Фильм, реклама, клип, документалка..."
                    className="bg-black border-cinematic-gray-dark focus:border-cinematic-orange text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-cinematic-gray-light">Описание проекта</label>
                  <Textarea 
                    placeholder="Расскажите о вашей идее, бюджете и сроках..."
                    rows={4}
                    className="bg-black border-cinematic-gray-dark focus:border-cinematic-orange text-white resize-none"
                  />
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-cinematic-orange to-cinematic-orange-dark hover:from-cinematic-orange-dark hover:to-cinematic-orange text-black font-montserrat font-semibold py-3 rounded-full transition-all duration-300"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить Запрос
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-cinematic-gray-dark border-t border-cinematic-gray-dark">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-montserrat font-bold bg-gradient-to-r from-cinematic-orange to-cinematic-orange-dark bg-clip-text text-transparent mb-4">
                FILM PRODUCTION
              </h3>
              <p className="text-cinematic-gray-light mb-4">
                Профессиональная кинокомпания, создающая качественный контент мирового уровня. 
                Превращаем идеи в незабываемые визуальные истории.
              </p>
              <div className="flex space-x-4">
                {['Instagram', 'Youtube', 'Facebook', 'Twitter'].map((social) => (
                  <Button key={social} variant="ghost" size="icon" className="text-cinematic-gray-light hover:text-cinematic-orange">
                    <Icon name={social as any} size={20} />
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold text-white mb-4">Услуги</h4>
              <ul className="space-y-2 text-cinematic-gray-light">
                <li>Производство фильмов</li>
                <li>Рекламные ролики</li>
                <li>Музыкальные клипы</li>
                <li>Документальное кино</li>
                <li>Постпродакшн</li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold text-white mb-4">Контакты</h4>
              <div className="space-y-2 text-cinematic-gray-light">
                <p>+7 (495) 123-45-67</p>
                <p>info@filmproduction.ru</p>
                <p>Москва, ул. Тверская, 1</p>
              </div>
            </div>
          </div>
          <div className="border-t border-cinematic-gray-dark mt-8 pt-8 text-center text-cinematic-gray-light">
            <p>&copy; 2024 Film Production. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index