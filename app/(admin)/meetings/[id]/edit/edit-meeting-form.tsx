'use client';

import { useActionState } from 'react';
import { updateMeeting } from '@/lib/actions';
import type { SacramentMeeting } from '@/lib/types';

interface EditMeetingFormProps {
  meeting: SacramentMeeting;
}

const initialState = {
  message: null,
  errors: {},
};

export default function EditMeetingForm({
  meeting,
}: EditMeetingFormProps) {
  const updateMeetingWithId = updateMeeting.bind(null, meeting.id);

  const [state, formAction, isPending] = useActionState(
    updateMeetingWithId,
    initialState
  );

  return (
    <main className="min-h-screen px-8 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-3xl font-bold">Edit Meeting</h1>

        <form action={formAction} className="space-y-8">
          {state.message && (
            <p
              className="mb-4 text-sm text-red-600"
              aria-live="polite"
            >
              {state.message}
            </p>
          )}

          {/* Meeting Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">
              Meeting Information
            </h2>

            <div>
              <label
                htmlFor="date"
                className="block font-semibold"
              >
                Date
              </label>
              <input
                id="date"
                type="date"
                name="date"
                required
                defaultValue={meeting.date}
                aria-describedby="date-error"
                className="w-full rounded border p-2"
              />
              <p
                id="date-error"
                aria-live="polite"
                className="text-sm text-red-600"
              >
                {state.errors?.date?.map((error) => (
                  <span key={error} className="block">
                    {error}
                  </span>
                ))}
              </p>
            </div>

            <div>
              <label
                htmlFor="meetingType"
                className="block font-semibold"
              >
                Meeting Type
              </label>
              <select
                id="meetingType"
                name="meetingType"
                required
                defaultValue={meeting.meetingType}
                aria-describedby="meetingType-error"
                className="w-full rounded border p-2"
              >
                <option value="regular">Regular</option>
                <option value="testimony">Testimony</option>
                <option value="stake">Stake</option>
                <option value="general">General</option>
              </select>
              <p
                id="meetingType-error"
                aria-live="polite"
                className="text-sm text-red-600"
              >
                {state.errors?.meetingType?.map((error) => (
                  <span key={error} className="block">
                    {error}
                  </span>
                ))}
              </p>
            </div>

            <div>
              <label
                htmlFor="presiding"
                className="block font-semibold"
              >
                Presiding
              </label>
              <input
                id="presiding"
                name="presiding"
                required
                defaultValue={meeting.presiding}
                aria-describedby="presiding-error"
                className="w-full rounded border p-2"
              />
              <p
                id="presiding-error"
                aria-live="polite"
                className="text-sm text-red-600"
              >
                {state.errors?.presiding?.map((error) => (
                  <span key={error} className="block">
                    {error}
                  </span>
                ))}
              </p>
            </div>

            <div>
              <label
                htmlFor="conducting"
                className="block font-semibold"
              >
                Conducting
              </label>
              <input
                id="conducting"
                name="conducting"
                required
                defaultValue={meeting.conducting}
                aria-describedby="conducting-error"
                className="w-full rounded border p-2"
              />
              <p
                id="conducting-error"
                aria-live="polite"
                className="text-sm text-red-600"
              >
                {state.errors?.conducting?.map((error) => (
                  <span key={error} className="block">
                    {error}
                  </span>
                ))}
              </p>
            </div>

            <div>
              <label
                htmlFor="announcements"
                className="block font-semibold"
              >
                Announcements
              </label>
              <textarea
                id="announcements"
                name="announcements"
                rows={4}
                defaultValue={(meeting.announcements ?? []).join('\n')}
                placeholder="One announcement per line"
                aria-describedby="announcements-error"
                className="w-full rounded border p-2"
              />
              <p
                id="announcements-error"
                aria-live="polite"
                className="text-sm text-red-600"
              >
                {state.errors?.announcements?.map((error) => (
                  <span key={error} className="block">
                    {error}
                  </span>
                ))}
              </p>
            </div>
          </section>

          {/* Opening */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Opening</h2>

            <div>
              <label
                htmlFor="openingHymnNumber"
                className="block font-semibold"
              >
                Opening Hymn Number
              </label>
              <input
                id="openingHymnNumber"
                type="number"
                name="openingHymnNumber"
                min="1"
                required
                defaultValue={meeting.openingHymn.number}
                aria-describedby="openingHymnNumber-error"
                className="w-full rounded border p-2"
              />
              <p
                id="openingHymnNumber-error"
                aria-live="polite"
                className="text-sm text-red-600"
              >
                {state.errors?.openingHymn?.map((error) => (
                  <span key={error} className="block">
                    {error}
                  </span>
                ))}
              </p>
            </div>

            <div>
              <label
                htmlFor="openingHymnTitle"
                className="block font-semibold"
              >
                Opening Hymn Title
              </label>
              <input
                id="openingHymnTitle"
                name="openingHymnTitle"
                required
                defaultValue={meeting.openingHymn.title}
                aria-describedby="openingHymnTitle-error"
                className="w-full rounded border p-2"
              />
              <p
                id="openingHymnTitle-error"
                aria-live="polite"
                className="text-sm text-red-600"
              >
                {state.errors?.openingHymn?.map((error) => (
                  <span key={error} className="block">
                    {error}
                  </span>
                ))}
              </p>
            </div>

            <div>
              <label
                htmlFor="openingPrayer"
                className="block font-semibold"
              >
                Opening Prayer
              </label>
              <input
                id="openingPrayer"
                name="openingPrayer"
                required
                defaultValue={meeting.openingPrayer}
                aria-describedby="openingPrayer-error"
                className="w-full rounded border p-2"
              />
              <p
                id="openingPrayer-error"
                aria-live="polite"
                className="text-sm text-red-600"
              >
                {state.errors?.openingPrayer?.map((error) => (
                  <span key={error} className="block">
                    {error}
                  </span>
                ))}
              </p>
            </div>
          </section>

          {/* Ward Business */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Ward Business</h2>

            <div>
              <label
                htmlFor="wardBusiness"
                className="block font-semibold"
              >
                Ward Business
              </label>
              <textarea
                id="wardBusiness"
                name="wardBusiness"
                rows={4}
                defaultValue={meeting.wardBusiness
                  .map((item) => item.description)
                  .join('\n')}
                placeholder="One item per line"
                aria-describedby="wardBusiness-error"
                className="w-full rounded border p-2"
              />
              <p
                id="wardBusiness-error"
                aria-live="polite"
                className="text-sm text-red-600"
              >
                {state.errors?.wardBusiness?.map((error) => (
                  <span key={error} className="block">
                    {error}
                  </span>
                ))}
              </p>
            </div>

            <div>
              <label
                htmlFor="stakeBusiness"
                className="flex items-center gap-2"
              >
                <input
                  id="stakeBusiness"
                  type="checkbox"
                  name="stakeBusiness"
                  value="true"
                  defaultChecked={meeting.stakeBusiness}
                  aria-describedby="stakeBusiness-error"
                />
                <span className="font-semibold">
                  Stake Business
                </span>
              </label>
              <p
                id="stakeBusiness-error"
                aria-live="polite"
                className="text-sm text-red-600"
              >
                {state.errors?.stakeBusiness?.map((error) => (
                  <span key={error} className="block">
                    {error}
                  </span>
                ))}
              </p>
            </div>
          </section>

          {/* Sacrament */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Sacrament</h2>

            <div>
              <label
                htmlFor="sacramentHymnNumber"
                className="block font-semibold"
              >
                Sacrament Hymn Number
              </label>
              <input
                id="sacramentHymnNumber"
                type="number"
                name="sacramentHymnNumber"
                min="1"
                required
                defaultValue={meeting.sacramentHymn.number}
                aria-describedby="sacramentHymnNumber-error"
                className="w-full rounded border p-2"
              />
              <p
                id="sacramentHymnNumber-error"
                aria-live="polite"
                className="text-sm text-red-600"
              >
                {state.errors?.sacramentHymn?.map((error) => (
                  <span key={error} className="block">
                    {error}
                  </span>
                ))}
              </p>
            </div>

            <div>
              <label
                htmlFor="sacramentHymnTitle"
                className="block font-semibold"
              >
                Sacrament Hymn Title
              </label>
              <input
                id="sacramentHymnTitle"
                name="sacramentHymnTitle"
                required
                defaultValue={meeting.sacramentHymn.title}
                aria-describedby="sacramentHymnTitle-error"
                className="w-full rounded border p-2"
              />
              <p
                id="sacramentHymnTitle-error"
                aria-live="polite"
                className="text-sm text-red-600"
              >
                {state.errors?.sacramentHymn?.map((error) => (
                  <span key={error} className="block">
                    {error}
                  </span>
                ))}
              </p>
            </div>
          </section>

          {/* Speakers */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Speakers</h2>

            <div>
              <label
                htmlFor="speakers"
                className="block font-semibold"
              >
                Speakers and Musical Numbers
              </label>
              <textarea
                id="speakers"
                name="speakers"
                rows={6}
                defaultValue={meeting.speakers
                  .map(
                    (speaker) =>
                      `${speaker.name} | ${speaker.topic} | ${speaker.type}`
                  )
                  .join('\n')}
                placeholder={`One per line using:
Name | Topic | speaker

Example:
John Smith | Faith in Jesus Christ | speaker
Jane Doe | Come Follow Me | speaker
Choir | Amazing Grace | musical-number`}
                aria-describedby="speakers-error"
                className="w-full rounded border p-2"
              />
              <p
                id="speakers-error"
                aria-live="polite"
                className="text-sm text-red-600"
              >
                {state.errors?.speakers?.map((error) => (
                  <span key={error} className="block">
                    {error}
                  </span>
                ))}
              </p>
            </div>
          </section>

          {/* Closing */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Closing</h2>

            <div>
              <label
                htmlFor="closingHymnNumber"
                className="block font-semibold"
              >
                Closing Hymn Number
              </label>
              <input
                id="closingHymnNumber"
                type="number"
                name="closingHymnNumber"
                min="1"
                required
                defaultValue={meeting.closingHymn.number}
                aria-describedby="closingHymnNumber-error"
                className="w-full rounded border p-2"
              />
              <p
                id="closingHymnNumber-error"
                aria-live="polite"
                className="text-sm text-red-600"
              >
                {state.errors?.closingHymn?.map((error) => (
                  <span key={error} className="block">
                    {error}
                  </span>
                ))}
              </p>
            </div>

            <div>
              <label
                htmlFor="closingHymnTitle"
                className="block font-semibold"
              >
                Closing Hymn Title
              </label>
              <input
                id="closingHymnTitle"
                name="closingHymnTitle"
                required
                defaultValue={meeting.closingHymn.title}
                aria-describedby="closingHymnTitle-error"
                className="w-full rounded border p-2"
              />
              <p
                id="closingHymnTitle-error"
                aria-live="polite"
                className="text-sm text-red-600"
              >
                {state.errors?.closingHymn?.map((error) => (
                  <span key={error} className="block">
                    {error}
                  </span>
                ))}
              </p>
            </div>

            <div>
              <label
                htmlFor="closingPrayer"
                className="block font-semibold"
              >
                Closing Prayer
              </label>
              <input
                id="closingPrayer"
                name="closingPrayer"
                required
                defaultValue={meeting.closingPrayer}
                aria-describedby="closingPrayer-error"
                className="w-full rounded border p-2"
              />
              <p
                id="closingPrayer-error"
                aria-live="polite"
                className="text-sm text-red-600"
              >
                {state.errors?.closingPrayer?.map((error) => (
                  <span key={error} className="block">
                    {error}
                  </span>
                ))}
              </p>
            </div>
          </section>

          <button
            type="submit"
            disabled={isPending}
            className="rounded bg-black px-4 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isPending ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      </div>
    </main>
  );
}