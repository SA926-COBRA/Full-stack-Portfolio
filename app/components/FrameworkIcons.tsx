import React from 'react';
import {
  AmazonwebservicesOriginalWordmark,
  AngularjsOriginal,
  AnsibleOriginal,
  BashOriginal,
  COriginal,
  CplusplusOriginal,
  CsharpOriginal,
  Css3Original,
  DartOriginal,
  DjangoPlainWordmark, DjangorestLineWordmark, DjangorestOriginal, DjangorestPlain, DjangorestPlainWordmark,
  DockerOriginalWordmark,
  DotnetcoreOriginal,
  DotNetOriginal,
  FastapiOriginal,
  FlaskOriginal,
  FlutterOriginal,
  GitlabOriginalWordmark,
  GooglecloudOriginal,
  GoOriginal,
  Html5Original,
  JavaOriginal,
  JavascriptOriginal,
  JenkinsOriginal,
  JqueryOriginalWordmark,
  KotlinOriginal,
  KubernetesOriginalWordmark,
  LaravelOriginal,
  MicrosoftsqlserverOriginalWordmark,
  MongodbOriginalWordmark,
  MysqlOriginalWordmark,
  NextjsOriginal,
  NodejsOriginal,
  PerlOriginal,
  PhpOriginal,
  PostgresqlOriginalWordmark,
  PrometheusOriginal,
  PythonOriginal,
  ReactOriginal,
  ReactOriginalWordmark,
  ROriginal,
  RubyOriginal,
  RustOriginal,
  SeleniumOriginal,
  SpringOriginal,
  SqlalchemyOriginalWordmark,
  SqliteOriginalWordmark,
  SwiftOriginal,
  SwiftOriginalWordmark,
  TailwindcssOriginal,
  TypescriptOriginal,
  VuejsOriginal, WebflowOriginal, WordpressOriginal,
} from "devicons-react";
import {GitHubLogoIcon} from "@radix-ui/react-icons";
import {SiExpress} from "react-icons/si";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

interface Framework {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export const allFrameworks: Framework[] = [
  {value: 'REACTJS', label: 'React.js', icon: <ReactOriginalWordmark size={30} color="slategrey"/>},
  {value: 'NODEJS', label: 'Node.js', icon: <NodejsOriginal size={30} color="slategrey"/>},
  {value: 'NEXTJS', label: 'Next.js', icon: <NextjsOriginal size={30} color="slategrey"/>},
  {value: 'PYTHON', label: 'Python', icon: <PythonOriginal size={30} color="slategrey"/>},
  {value: 'DJANGO', label: 'Django', icon: <DjangoPlainWordmark size={30} color="darkgreen"/>},
  {value: 'DJANGOREST', label: 'DjangoRestFramework', icon: <DjangorestPlain size={30} color="slategrey"/>},
  {value: 'FLASK', label: 'Flask', icon: <FlaskOriginal size={30} color="slategrey"/>},
  {value: 'FASTAPI', label: 'FastAPI', icon: <FastapiOriginal size={30} color="slategrey"/>},
  {value: 'ASPDOTNET', label: 'ASP.NET', icon: <DotNetOriginal size={30} color="slategrey"/>},
  {value: 'TYPESCRIPT', label: 'TypeScript', icon: <TypescriptOriginal size={30} color="slategrey"/>},
  {value: 'JAVASCRIPT', label: 'JavaScript', icon: <JavascriptOriginal size={30} color="slategrey"/>},
  {value: 'CPLUSPLUS', label: 'C++', icon: <CplusplusOriginal size={30} color="slategrey"/>},
  {value: 'CSHARP', label: 'C#', icon: <CsharpOriginal size={30} color="slategrey"/>},
  {value: 'RUST', label: 'Rust', icon: <RustOriginal size={30} color="slategrey"/>},
  {value: 'JAVA', label: 'Java', icon: <JavaOriginal size={30} color="slategrey"/>},
  {value: 'PHP', label: 'PHP', icon: <PhpOriginal size={30} color="slategrey"/>},
  {value: 'RUBY', label: 'Ruby', icon: <RubyOriginal size={30} color="slategrey"/>},
  {value: 'GOLANG', label: 'Go', icon: <GoOriginal size={30} color="slategrey"/>},
  {value: 'SWIFT', label: 'Swift', icon: <SwiftOriginal size={30} color="slategrey"/>},
  {value: 'KOTLIN', label: 'Kotlin', icon: <KotlinOriginal size={30} color="slategrey"/>},
  {value: 'DART', label: 'Dart', icon: <DartOriginal size={30} color="slategrey"/>},
  {value: 'ANGULAR', label: 'Angular', icon: <AngularjsOriginal size={30} color="slategrey"/>},
  {value: 'VUEJS', label: 'Vue.js', icon: <VuejsOriginal size={30} color="slategrey"/>},
  {value: 'DOTNET', label: '.NET', icon: <DotnetcoreOriginal size={30} color="slategrey"/>},
  {value: 'GITHUB', label: 'Github', icon: <GitHubLogoIcon color="slategrey"/>},
  {value: 'HTML', label: 'HTML5', icon: <Html5Original size={30} color="slategrey"/>},
  {value: 'CSS', label: 'CSS3', icon: <Css3Original size={30} color="slategrey"/>},
  {value: 'SQL', label: 'SQL', icon: <MicrosoftsqlserverOriginalWordmark size={30} color="slategrey"/>},
  {value: 'MYSQL', label: 'Mysql', icon: <MysqlOriginalWordmark size={30} color="slategrey"/>},
  {value: 'POSTGRESQL', label: 'Postgresql', icon: <PostgresqlOriginalWordmark size={30} color="slategrey"/>},
  {value: 'SQLITE', label: 'Sqlite', icon: <SqliteOriginalWordmark size={30} color="slategrey"/>},
  {value: 'SQLALCHEMY', label: 'Sqlalchemy', icon: <SqlalchemyOriginalWordmark size={30} color="slategrey"/>},
  {value: 'MONGODB', label: 'MongoDB', icon: <MongodbOriginalWordmark size={30} color="slategrey"/>},
  {value: 'C', label: 'C', icon: <COriginal size={30} color="slategrey"/>},
  {value: 'R', label: 'R', icon: <ROriginal size={30} color="slategrey"/>},
  {value: 'SWIFTUI', label: 'SwiftUi', icon: <SwiftOriginalWordmark size={30} color="slategrey"/>},
  {value: 'BASH', label: 'Bash', icon: <BashOriginal size={30} color="slategrey"/>},
  {value: 'PERL', label: 'Perl', icon: <PerlOriginal size={30} color="slategrey"/>},
  {value: 'JQUERY', label: 'JQuery', icon: <JqueryOriginalWordmark size={30} color="slategrey"/>},
  {value: 'SELENIUM', label: 'Selenium', icon: <SeleniumOriginal size={30} color="slategrey"/>},
  {value: 'DOCKER', label: 'Docker', icon: <DockerOriginalWordmark size={30} color="slategrey"/>},
  {value: 'KUBERNETES', label: 'Kubernetes', icon: <KubernetesOriginalWordmark size={30} color="slategrey"/>},
  {value: 'JENKINS', label: 'Jenkins', icon: <JenkinsOriginal size={30} color="slategrey"/>},
  {value: 'GITLAB', label: 'Gitlab', icon: <GitlabOriginalWordmark size={30} color="slategrey"/>},
  {value: 'ANSIBLE', label: 'Ansible', icon: <AnsibleOriginal size={30} color="slategrey"/>},
  {value: 'PROMETHEUS', label: 'Prometheus', icon: <PrometheusOriginal size={30} color="slategrey"/>},
  {value: 'AWS', label: 'AmazonWebServices', icon: <AmazonwebservicesOriginalWordmark size={30} color="slategrey"/>},
  {value: 'GOOGLECLOUD', label: 'GoogleCloud', icon: <GooglecloudOriginal size={30} color="slategrey"/>},
  {value: 'EXPRESSJS', label: 'ExpressJs', icon: <SiExpress size={30} color="gray"/>},
  {value: 'SPRINGBOOT', label: 'SpringBoot', icon: <SpringOriginal size={30} color="slategrey"/>},
  {value: 'LARAVEL', label: 'Laravel', icon: <LaravelOriginal size={30} color="slategrey"/>},
  {value: 'FLUTTER', label: 'Flutter', icon: <FlutterOriginal size={30} color="slategrey"/>},
  {value: 'REACTNATIVE', label: 'ReactNative', icon: <ReactOriginal size={30} color="slategrey"/>},
  {value: 'TAILWINDCSS', label: 'TailwindCss', icon: <TailwindcssOriginal size={30} color="slategrey"/>},
  {value: 'WEBFLOW', label: 'Webflow', icon: <WebflowOriginal size={30} color="slategrey"/>},
  {value: 'WORDPRESS', label: 'Wordpress', icon: <WordpressOriginal size={30} color="slategrey"/>},
];

const renderSkills = (skills: { [key: string]: boolean }, size: number) => {
  let count = 0;
  return Object.entries(skills).map(([skill, value]) => {
    if (value && count < size) {
      count++;
      return (
          <div key={skill}>
            {allFrameworks.map((framework) => {
              if (framework.value === skill) {
                return (
                    <React.Fragment key={framework.value}>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <div
                                className="sm:w-12 sm:h-12 w-10 h-10  bg-muted overflow-hidden flex justify-center items-center rounded-md">
                              {framework.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-secondary text-foreground">
                            <div>{framework.label}</div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </React.Fragment>
                );
              }
              return null;
            })}
          </div>
      );
    }
    return null;
  });
};

const FrameworkIcons = ({skills, size}: { skills: { [key: string]: boolean }, size: number }) => {
  return (
      <div className="framework-list">
        <div className="flex gap-3 flex-wrap">
          {renderSkills(skills, size)}
        </div>
      </div>
  );
};

export default FrameworkIcons;
