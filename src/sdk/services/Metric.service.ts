import { Metric } from "../@types";
import Service from "../Service";

export default class MetricService extends Service {

    static getTop3Tags () {
        return this.Http
            .get<Metric.EditorTagRatio>('/metrics/editor/top3-tags')
            .then(this.getData)
    }

    static getEditorMonthlyEarnings () {
        return this.Http
            .get<Metric.EditorMonthlyEarnings>('/metrics/editor/monthly-earnings')
            .then(this.getData)        
    }
}