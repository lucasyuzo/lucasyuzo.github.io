import { Subscription } from 'rxjs';

export interface EventFeature {
    subscribe(): Subscription;
}
