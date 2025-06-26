import { Subscription } from 'rxjs';
import { EventFeature } from './event.feature';

export class EventFeatureHandler {

    private features: EventFeature[] = [];
    private subscriptions: Subscription = new Subscription();

    add(feature: EventFeature): this {
        this.features.push(feature);
        return this;
    }

    listen(): void {
        this.features.forEach(
            (feature: EventFeature) => {
                this.subscriptions.add(feature.subscribe());
            }
        );
    }

    unlisten(): void {
        this.subscriptions.unsubscribe();
    }

}
