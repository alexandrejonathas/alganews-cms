import { AlagaNews } from "./AlgaNews";

export namespace User {
    
    export type Input = AlagaNews.components['schemas']['UserInput']
    export type Detailed = AlagaNews.components['schemas']['UserDetailed']
    export type Summary = AlagaNews.components['schemas']['UserSummary']
    export type Minimal = AlagaNews.components['schemas']['UserMinimal']
    export type Metrics = AlagaNews.components['schemas']['UserMetrics']

    export type Role = AlagaNews.components['schemas']['Role']
    export type Skill = AlagaNews.components['schemas']['Skill']

    export type EditorSummary = AlagaNews.components['schemas']['EditorSummary']
    export type EditorDetailed = AlagaNews.components['schemas']['EditorDetailed']

}