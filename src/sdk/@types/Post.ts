import { AlagaNews } from "./AlgaNews";

export namespace Post {

    export type Summary = AlagaNews.components['schemas']['PostSummary']
    export type Detailed = AlagaNews.components['schemas']['PostDetailed']
    export type WithEarnings = AlagaNews.components['schemas']['PostWithEarnings']
    export type Input = AlagaNews.components['schemas']['PostInput']
    export type Paginated = AlagaNews.components['schemas']['PostsPaginated']

}