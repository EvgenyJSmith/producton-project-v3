
//	режим разработки
export type BuildMode = 'production' | 'development';

//	пути итоговой сборки
export interface BuildPaths{
	entry: string;
	build: string;
	html: string;
}

//	список настроек
export interface BuildOptions{
	mode: BuildMode;
	paths: BuildPaths;
	isDev: boolean;

	port: number;
}

//	переменные окружения
export interface BuildEnv{
	port: number;
	mode: BuildMode;
}