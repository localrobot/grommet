// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var Chapter = require('Chapter');

var Philosophy = React.createClass({

  render: function() {
    return (
      <Chapter title="Philosophy">
        <header>
          <section>
            <h1>Philosophy</h1>

            <ol className="chapter__nav list-bare">
              <li data-target="best-practices">Best Practices</li>
              <li data-target="usability">Usability</li>
              <li data-target="interactions">Interactions</li>
              <li data-target="mobile">Mobile</li>
              <li data-target="accessibility">Accessibility</li>
            </ol>
          </section>
        </header>

        <section id="best-practices">
          <h2>Best Practices</h2>

          <dl>
            <dt>Let the user take control</dt>
            <dd>Provide ways for users to experience work with purpose, joy
            and efficiency by eliminating their pain points and allow them
            to craft their experience.</dd>

            <dt>Content over chrome</dt>
            <dd>You can have a gorgeous interface but if your content is hidden
            or the interactions are clumsy you are missing the point. Focus on
            the things that will deliver the greatest value to your customer.</dd>

            <dt>Don’t drown the user in data</dt>
            <dd>Carefully choose what you present to your users. If there is
            too much information available they will become overwhelmed and will
            likely abandon the experience.</dd>

            <dt>Product uniqueness while maintaining brand alignment</dt>
            <dd>Let your innovation shine through but remember that your product
            will be used by users who are using other products from HP.  You don’t
            want your application to feel or behave different in the core areas
            of navigation and interaction.</dd>

            <dt>Consistency across the application</dt>
            <dd>Use common controls, fonts and color scheme throughout your
            application. Customers like repetition and are comfortable with
            repeat patterns. This assures them that they are doing things
            correctly.</dd>

            <dt>Remember mobile first</dt>
            <dd>Designing for mobile first is very beneficial even if your
            main focus is not on mobile. Doing so can help eliminate non-essential
            information while reinforcing the most important information.</dd>

            <dt>Tell a story</dt>
            <dd>Stories are irresistible to human beings. Telling a story will
            help people connect with your product. Craft the user experience and
            add meaning to what can be done with your application.</dd>

            <dt>Tie in to existing mental models</dt>
            <dd>Mental models are schemes, images or representations of how we
            perceive and understand things. Use this concept to leverage the user
            knowledge on how your feature, control, and application works.</dd>

            <dt>Align with conventions, resist re-creating the wheel</dt>
            <dd>Be conscious about the correct time to innovate and the time to
            use existent design patterns.</dd>

            <dt>There are no user errors</dt>
            <dd>Do not let your users feel guilty about anything that happens
            inside your application. Use a friendly voice for system errors and
            take accountability for the interruption. Never blame the customer.</dd>

            <dt>You are not your application’s user</dt>
            <dd>Designers and developers can be described as advanced or
            “superusers” who are aware of every detail of an application that often
            leading to a detached perspective of an authentic user experience.</dd>

            <dt>All users are not the same</dt>
            <dd>Different users have different goals and each individual has a
            set of previous experiences that are relative to your application.</dd>

            <dt>Think about the entire user experience, beyond the UI</dt>
            <dd>Understand how your customers will interact with your product.
            Talk with different users to understand all the touchpoints.
            Consider creating a user journey for each persona. Share this
            deliverable with the whole team to leverage the impact of each
            person’s role in the project, increasing individual ownership
            and commitment.</dd>
          </dl>
        </section>

        <section id="usability">
          <h2>Usability</h2>

          <dl>
            <dt>Focus on the task at hand</dt>
            <dd>Do not create distractions that won’t contribute to the task that
            your user is dealing with.</dd>

            <dt>Use progressive disclosure to create depth of content</dt>
            <dd>Do not clutter the interface with elements that do not make
            sense at that moment. Present the minimum required for a given task
            then grow the experience from there.</dd>

            <dt>People don’t read, they scan</dt>
            <dd>In user interfaces, massive amounts of text are usually
            treated as blocks of irrelevant information. If you want people
            to be aware of your content user short phrases or bullet points
            instead or highlight important data with proper styling.</dd>

            <dt>Tutorials vs. contextual help</dt>
            <dd>Well designed tutorials enable your user to remember how the
            feature works and will need less hand holding while navigating
            through your interface.</dd>

            <dt>Span form factors</dt>
            <dd>Expect your application to be used by multiple types of
            device and environmental conditions.</dd>
          </dl>
        </section>

        <section id="interactions">
          <h2>Interactions</h2>

          <dl>
            <dt>Use device appropriate gestures and interactions</dt>
            <dd>Users expect interfaces to work naturally on their device.
            Delight your users by providing the expected interactions for
            the device they are using.</dd>

            <dt>Animate to ease and explain transitions and aid discovery</dt>
            <dd>Animations should be natural and reinforce the user’s
            interaction with  your application.  They should not be distracting
            or disruptive.</dd>
          </dl>
        </section>

        <section id="mobile">
          <h2>Mobile</h2>

          <p>Mobile is not just different screen sizes. Mobile devices actually
          change the fundamental user user experience of common tasks. Embrace
          the devices and their native capabilities.</p>

          <dl>
            <dt>Consider new use cases</dt>
            <dd>What are the scenarios where people will be using your
            application outside of the traditional desktop environment?
            Reevaluate the need to have some features and capabilities
            designed for smaller screens. Take advantage of the capabilities
            that mobile devices have to offer such as a camera and notifications
            when designing your application.</dd>

            <dt>New devices sizes</dt>
            <dd>Do not plan your designs with a specific and unique
            resolution in mind. Consider that new devices are launched through
            the year. The more fluid your design is the better your
            application will behave, regardless the resolution and density of
            the screen.</dd>

            <dt>New device capabilities: GPS, camera, accelerometer, etc.</dt>
            <dd>You can use these new capabilities to implement features that
            requires geo positioning and location. Use the device orientation
            to provide a different view of the same screen or some related data.</dd>

            <dt>Gestures</dt>
            <dd>Users become accustomed to gesture support on their platform.
            Swiping, pinching, zooming, and even multi-finger gestures are
            becoming commonplace in mobile applications.</dd>

            <dt>Larger target areas</dt>
            <dd>A fingertip is less precise than a mouse pointer therefore
            needs a larger target. When designing for mobile remember to
            increase the size of buttons, form elements and controls.</dd>

            <dt>No hover</dt>
            <dd>Without the capacity to hover elements on a touch screen,
            be careful about the type of information or interaction that
            you associate with this action on the desktop version.</dd>

            <dt>Animate transitions but watch out for performance issues</dt>
            <dd>Transitions can be a delightful detail when you’re using an
            application, but consider that your design may be experienced on
            devices with drastically different hardware. What looks like a
            crafted detail in one device may turn into an annoying experience
            in another.</dd>

            <dt>A desktop experience is not a mobile experience</dt>
            <dd>Consider the context in which people will be using your
            application. Desktop and mobile experiences are far from seamless.
            For example, if you have a secondary feature that is composed
            of several steps and interactions, you may leave this experience
            for the desktop version only.</dd>

            <dt>Selection is preferred over input controls</dt>
            <dd>It is much easier to select a value from a pre-populated
            list than it is to input a value into a field using a (virtual)
            keyboard.</dd>

            <dt>Stay tuned</dt>
            <dd>Styling for native mobile applications will added to this
            guide in the near future.</dd>
          </dl>
        </section>

        <section id="accessibility">
          <h2>Accessibility</h2>

          <p>Why does accessibility matter? Happier users, increased revenue,
          and universal access. For people with disabilities, being empowered
          with independent access to your application can provide a delightful
          sense of freedom. Basically, providing an accessible tool is the right
          thing to do for our users, and for our business.</p>

          <p>In general, we follow the Web Content Accessibility Guidelines (WCAG)
          version 2.0. If you follow the HP Application Style Guide, your
          application will satisfy many aspects of the WCAG.</p>

          <p>At least, you should pay attention to three essential things:</p>

          <ol>
            <li>Write good code. A well-written, semantic code is the essence
            of accessibility. It’s your primary mission. Consider accessibility
            since the first days of development, it will make your life easier
            and your users will be grateful. Trust us. ;)</li>

            <li>Use the elements as they were built to be used. Use buttons as
            buttons (triggering an action, activating a behavior), links as
            links (to lead users to another document), put label in all elements
            and use alternative text for images.</li>

            <li>Enable all functionalities for keyboard control. Make sure that
            the navigation order is intuitive and logical, use focus indicators
            and try to avoid non-navigable elements.</li>
          </ol>
        </section>

      </Chapter>
    );
  }

});

module.exports = Philosophy;
