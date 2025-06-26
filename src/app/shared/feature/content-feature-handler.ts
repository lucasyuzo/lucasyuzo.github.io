import { ContentFeature } from './content.feature';

export class ContentFeatureHandler {

    private features: ContentFeature[] = [];

    add(feature: ContentFeature): this {
        this.features.push(feature);
        return this;
    }

    populate(): void {
        this.features.forEach((feature: ContentFeature) => {
            feature.populate();
        });
    }

}
